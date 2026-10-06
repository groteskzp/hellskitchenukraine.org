/**
 * Public Google Drive folders shown on the site.
 * Swap an id here when the foundation moves a folder.
 * Parent folder «САЙТ» is kept for reference.
 */
export const DRIVE_FOLDERS = {
  documents: '14eVEMNijeh7K7EXk3UWvuT8rCvv1ZSXx',
  standards: '1gqmube-KgNNRwHkk9VpIkKjo4nLx4raj',
  other: '1Km5nbnrM69BnQghNqQgjPtHBVHt5Wq6Z',
  site: '1zFJ5MzkhFc2SJLZLP9N1gm92F_exvDP0',
} as const;

export type DriveFolderKey = keyof typeof DRIVE_FOLDERS;

export const driveEmbedUrl = (folderId: string): string =>
  `https://drive.google.com/embeddedfolderview?id=${folderId}#list`;

export const driveFolderUrl = (folderId: string): string =>
  `https://drive.google.com/drive/folders/${folderId}`;
