import React, { ChangeEvent } from 'react';
import { classNames } from '../../../utils/dom.utils';
import { areFilesValid } from '../../../utils/file.utils';
import { UploadProps } from './Upload.types';
import { UploadFile } from './UploadFile';

export function Upload({
  acceptedFormat = '*',
  deleteAriaLabel = 'Verwijder bestand',
  disabled = false,
  files = [],
  formatErrorLabel = 'Dit bestandsformaat is niet toegestaan.',
  id,
  label = 'Sleep een bestand hier of klik om te bladeren',
  maxSize = 10,
  maxSizeLabel = 'Maximale bestandsgrootte:',
  multiple = true,
  onChange,
  onDelete,
  sizeErrorLabel = 'Maximale bestandsgrootte overschreden.',
  qa
}: UploadProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDelete = (file: File) => {
    onDelete && onDelete(files?.filter((f) => f?.name !== file.name));
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (multiple) {
      const newFiles = e.target?.files
        ? [...files, ...Array.from(e.target.files)].filter(
            (file, index, self) => self.findIndex((f) => f.name === file.name) === index
          )
        : [];
      onChange && onChange(newFiles, areFilesValid(newFiles, acceptedFormat, maxSize));
    } else {
      const newFile = e.target?.files?.[0] ? [e.target?.files?.[0]] : [];
      onChange && onChange(newFile, areFilesValid(newFile, acceptedFormat, maxSize));
    }
  };

  return (
    <div className={classNames({ 'm-upload': true, 'is-disabled': !!disabled })} data-qa={qa}>
      <div className="m-upload__inner">
        <div className="m-upload__dropzone">
          <input
            ref={inputRef}
            id={id}
            type="file"
            multiple={multiple}
            onChange={handleChange}
            accept={acceptedFormat}
            className="m-upload__input"
            disabled={disabled}
            aria-describedby={`${id}-description`}
          />
          <div className="m-upload__content">
            <label htmlFor={id} className="m-upload__message u-margin-bottom">
              {label}
            </label>
          </div>
        </div>
      </div>
      {maxSize && (
        <small id={`${id}-description`} className="m-upload__description">
          {maxSizeLabel} {maxSize}MB
        </small>
      )}
      <ul className="m-upload__files">
        {files?.map((f) => (
          <UploadFile
            file={f}
            deleteAriaLabel={deleteAriaLabel}
            formatErrorLabel={formatErrorLabel}
            sizeErrorLabel={sizeErrorLabel}
            key={f?.name}
            onDelete={onDelete && handleDelete}
            maxSize={maxSize}
            acceptedFormat={acceptedFormat}
          />
        ))}
      </ul>
    </div>
  );
}

export default Upload;
