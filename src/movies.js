// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie => movie.director)
    return allDirectors 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const movies = moviesArray.filter(movie => {
    return (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    })

    return movies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if ( moviesArray.length === 0 ){
        return 0;
    }
    let nrScore = 0
    const totalScore = moviesArray.reduce(function (accumulator, movie){
        if (movie.score !== undefined) {
        nrScore ++;
        return accumulator + movie.score;
        }
        return accumulator;
    }, 0)
    let averageScore = (totalScore / moviesArray.length).toFixed(2);

    console.log(averageScore);
    return parseFloat(averageScore);
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => {
        return movie.genre.includes('Drama');
    })
const averageScoreDrama = scoresAverage(dramaMovies);
return averageScoreDrama;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMoviesArray = [...moviesArray].sort((a, b) =>{ 
        if (a.year === b.year) {
            let titleA = a.title.toUpperCase();
            let titleB = b.title.toUpperCase();
            if (titleA < titleB) {
                return -1;
            } else if (titleA > titleB) {
                return 1;
            } else {
                return 0;
            }
        }
        return a.year - b.year;
    });
    return sortedMoviesArray;
        
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titleList = moviesArray.map(movie => movie.title)
    const alphabetMovieList= titleList.sort((a, b) => {
        let titleA = a.toUpperCase();
        let titleB = b.toUpperCase();
        if (titleA < titleB) {
            return -1;
        } else if (titleA > titleB) {
            return 1;
        } 
        return 0;
    })
    if (alphabetMovieList.length <= 20 ) {
        return alphabetMovieList;
    } 
    return alphabetMovieList.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const minutesMoviesArray = [...moviesArray];
    
    minutesMoviesArray.forEach((movie) => {
    const time = movie.duration.split('h ');
    let h = parseInt(time[0]);
    let m = parseInt(time[1]);
    let timeMinute = h * 60 + m;
    movie.duration = timeMinute;
    })

    return minutesMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {(year, value) => {
    if (year.year === value.year){
        
    }
}}
