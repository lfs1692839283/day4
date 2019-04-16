const gulp = require('gulp');
const server = require('gulp-webserver');

gulp.task('server',()=>{
    gulp.src('.').pipe(server({
        port:3000,
        open : true,
        middleware : (req,res)=>{
            res.end('123')
        }
    }))
});


gulp.task('default',[server]);