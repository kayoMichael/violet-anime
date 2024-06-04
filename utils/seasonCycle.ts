export class Seasons {
  private seasons: string[] = ['winter', 'spring', 'summer', 'fall'];

  findIndex(season: string): number {
    return this.seasons.indexOf(season);
  }

  getNextSeason(currentSeason: string): string | null {
    const currentIndex = this.findIndex(currentSeason);
    if (currentIndex === -1) return null;
    return this.seasons[(currentIndex + 1) % this.seasons.length];
  }

  getPreviousSeason(currentSeason: string): string | null {
    const currentIndex = this.findIndex(currentSeason);
    if (currentIndex === -1) return null;
    return this.seasons[
      (currentIndex - 1 + this.seasons.length) % this.seasons.length
    ];
  }

  getSeasonAfter(currentSeason: string, n: number): string | null {
    const currentIndex = this.findIndex(currentSeason);
    if (currentIndex === -1) return null;
    return this.seasons[(currentIndex + n) % this.seasons.length];
  }

  getSeasonBefore(currentSeason: string, n: number): string | null {
    const currentIndex = this.findIndex(currentSeason);
    if (currentIndex === -1) return null;
    return this.seasons[
      (currentIndex - n + this.seasons.length) % this.seasons.length
    ];
  }
}
