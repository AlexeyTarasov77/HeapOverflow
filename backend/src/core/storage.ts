class StorageError extends Error {}

export class AlreadyExistsError extends StorageError {}

export enum PostgresErrorCodes {
  UNIQUE_VIOLATION = '23505',
}
