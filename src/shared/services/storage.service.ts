export class StorageService {
  private readonly storage = localStorage

  set(key: string, value: unknown) {
    this.storage.setItem(key, JSON.stringify(value, null, 2))
  }

  get<T>(key: string) {
    const serializedValue = this.storage.getItem(key)
    return !serializedValue ? undefined : (JSON.parse(serializedValue) as T)
  }
}

export const storageService = new StorageService()
