import { ICONS_SVG_HTML_ID } from '../constants/settings';

const MB = 1048576;

export function hasValidFormat(file: File, acceptedFormat = ''): boolean {
  const acceptedFormats = acceptedFormat
    .split(',')
    .map((format) => format.trim())
    .flatMap((format) => format.split('.'));

  return acceptedFormats.some(
    (format) =>
      !format ||
      format === '*' ||
      format === file.type ||
      (format.includes('*') && !!format.split('/')?.[0] && file.type.startsWith(format.split('/')?.[0]))
  );
}

export function hasValidSize(file: File, maxSize?: number): boolean {
  return !maxSize || file.size <= maxSize * MB;
}

export function areFilesValid(
  files: File[],
  acceptedFormat?: string,
  maxSize?: number
): { validSize: boolean; validFormat: boolean }[] {
  return files.map((f) => ({ validFormat: hasValidFormat(f, acceptedFormat), validSize: hasValidSize(f, maxSize) }));
}

export function invalidIcon(icon: SVGGraphicsElement): boolean {
  const { width, height } = icon.getBBox();
  return width === 0 && height === 0;
}

export function iconExists(iconName: string): boolean {
  if (typeof document === 'undefined') return false;
  const svgContainer = document.getElementById(ICONS_SVG_HTML_ID);
  if (!svgContainer) return false;
  return !!svgContainer.querySelector(`symbol#ai-${iconName}`);
}
