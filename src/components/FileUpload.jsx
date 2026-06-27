import React, { useState, useRef } from 'react';
import { uploadFile } from '../services/storageService';

/**
 * Componente reutilizable para subir archivos a Firebase Storage
 * @param {string} path - Ruta base en Storage donde se guardará el archivo
 * @param {Function} onUploadComplete - Callback que se ejecuta al completar la subida con los datos del archivo
 * @param {string} accept - Tipos de archivo aceptados (ej: "image/*,.pdf")
 * @param {boolean} multiple - Permitir selección múltiple de archivos
 * @param {string} label - Texto del botón o etiqueta
 */
const FileUpload = ({ 
  path, 
  onUploadComplete, 
  accept = "*/*", 
  multiple = false, 
  label = "Subir Archivos" 
}) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = async (event) => {
    const files = Array.from(event.target.files);
    
    if (files.length === 0) return;

    setUploading(true);
    setError(null);
    setProgress(0);

    const uploadedFiles = [];
    const errors = [];

    for (const file of files) {
      try {
        const result = await uploadFile(file, path, (currentProgress) => {
          setProgress(currentProgress);
        });

        if (result.success) {
          uploadedFiles.push(result);
        } else {
          errors.push(`Error subiendo ${file.name}: ${result.message}`);
        }
      } catch (err) {
        errors.push(`Error inesperado con ${file.name}: ${err.message}`);
      }
    }

    setUploading(false);
    
    if (errors.length > 0) {
      setError(errors.join(', '));
    }

    if (uploadedFiles.length > 0) {
      onUploadComplete(multiple ? uploadedFiles : uploadedFiles[0]);
    }

    // Resetear input para permitir subir el mismo archivo de nuevo si es necesario
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="file-upload-container">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={accept}
        multiple={multiple}
        style={{ display: 'none' }}
        disabled={uploading}
      />
      
      <button 
        onClick={triggerFileInput} 
        className="btn btn-primary"
        disabled={uploading}
        type="button"
      >
        {uploading ? 'Subiendo...' : label}
      </button>

      {uploading && (
        <div className="upload-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{Math.round(progress)}%</span>
        </div>
      )}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      
      {!uploading && progress === 100 && (
        <div className="success-message">
          ¡Archivos subidos exitosamente!
        </div>
      )}
    </div>
  );
};

export default FileUpload;