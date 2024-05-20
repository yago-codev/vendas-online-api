import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getCache<T>(
    key: string,
    functionRequest: () => Promise<T>,
  ): Promise<T> {
    const dataCache: T = await this.cacheManager.get(key);

    if (dataCache) {
      return dataCache;
    }

    const resultRequest: T = await functionRequest();

    await this.cacheManager.set(key, resultRequest);

    return resultRequest;
  }
}
