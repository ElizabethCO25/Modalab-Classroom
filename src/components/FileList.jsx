import React from 'react';
import { Download, FileText, Image, Video, Trash2 } from 'lucide-react';

/**
 * Componente para mostrar una lista de archivos con opciones de descarga y eliminación
 * @param {Array} files - Array de objetos { name, url, size, uploadedAt, path? }
 * @param {Function} onDownload - Callback opcional al hacer click en descargar
 * @param {Function} onDelete - Callback opcional para eliminar archivo (recibe path)
 * @param {Boolean} showDelete - Si se muestra el botón de eliminar
 */
const FileList = ({ 
  files = [], 
  onDownload = () => {}, 
  onDelete = null, 
  showDelete = false 
}) => {
  
  // Función para formatear el tamaño del archivo
  const formatSize = (bytes) => {
    if (!bytes && bytes !== 0) return 'Desconocido';
    const sizes = ['B', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 B';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  // Función para obtener el ícono según el tipo de archivo
  const getFileIcon = (fileName, contentType) => {
    if (contentType?.includes('image')) return <Image className="w-5 h-5 text-blue-500" />;
    if (contentType?.includes('video')) return <Video className="w-5 h-5 text-purple-500" />;
    if (contentType?.includes('pdf')) return <FileText className="w-5 h-5 text-red-500" />;
    return <FileText className="w-5 h-5 text-gray-500" />;
  };

  if (!files || files.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <p>No hay archivos disponibles</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {files.map((file, index) => (
        <div 
          key={file.path || file.url || index}
          className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center space-x-3 overflow-hidden">
            {/* Ícono del archivo */}
            <div className="flex-shrink-0">
              {getFileIcon(file.name, file.contentType)}
            </div>
            
            {/* Información del archivo */}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900 truncate" title={file.name}>
                {file.name}
              </p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>{formatSize(file.size)}</span>
                {file.uploadedAt && (
                  <>
                    <span>•</span>
                    <span>
                      {new Date(file.uploadedAt).toLocaleDateString()}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Acciones */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Botón de descarga */}
            {file.url && (
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  onDownload(file);
                  // Fallback a descarga nativa si no hay handler personalizado
                  window.open(file.url, '_blank');
                }}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                title="Descargar archivo"
              >
                <Download className="w-4 h-4" />
              </a>
            )}

            {/* Botón de eliminar */}
            {showDelete && onDelete && (
              <button
                onClick={() => onDelete(file)}
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                title="Eliminar archivo"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileList;