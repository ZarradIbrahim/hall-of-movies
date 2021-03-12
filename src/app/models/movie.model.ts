export class Movie {

    tconst: string;
    titleType: string;
    primaryTitle: string;
    originalTitle: string;
    isAdult: boolean;
    startYear: number;
    endYear: number;
    runTimeMinutes: number;
    genres: string[] ;

    constructor(tconst, titleType, primaryTitle, originalTitle, isAdult, startYear, endYear, runTimeMinutes, genres){
        this.tconst = tconst;
        this.primaryTitle = primaryTitle;
        this.titleType = titleType;
        this.originalTitle = originalTitle;
        this.isAdult = isAdult;
        this.startYear = startYear;
        this.endYear = endYear;
        this.runTimeMinutes = runTimeMinutes;
        this.genres = genres;
    }
}
