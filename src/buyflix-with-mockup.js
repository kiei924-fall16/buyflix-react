// React
var React = require('react');
var ReactDOM = require('react-dom');

// Sample data
var SampleData = require('./movie-data');           // SampleData.movies
var LotsMoreMovies = require('./lots-more-movies'); // LotsMoreMovies.movies

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className="header row">
          <div className="col-sm-9">
            <h1>Buyflix</h1>
          </div>
          <div className="hello col-sm-3 text-center">
            <h2>Hi, Brian!</h2>
          </div>
        </div>
        <div className="sort row">
          <div className="col-sm-12">
            <ul className="nav nav-pills">
              <li className="active"><a href="#">Latest Releases</a></li>
              <li><a href="#">A-Z</a></li>
              <li className="nav-text pull-right">8 movies</li>
            </ul>
          </div>
        </div>
        <div className="main row">
          <div className="movies col-sm-8">
            <div className="row">
              <div className="col-sm-2">
                <div className="thumbnail">
                  <img className="img-responsive" role="presentation" src="http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg" />
                  <div className="caption">
                    <h3>Star Wars: The Force Awakens</h3>
                    <p>Action, Adventure, Fantasy</p>
                    <p>135 mins</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="thumbnail">
                  <a href="#"><img className="img-responsive" role="presentation" src="http://ia.media-imdb.com/images/M/MV5BMjIxNDkzOTAyNV5BMl5BanBnXkFtZTgwNjEyOTY3NjE@._V1_SX300.jpg" /></a>
                  <div className="caption">
                    <h3>Point Break</h3>
                    <p>Action, Crime, Sport</p>
                    <p>114 mins</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="thumbnail">
                  <a href="#"><img className="img-responsive" role="presentation" src="http://ia.media-imdb.com/images/M/MV5BMjM2MTQ2MzcxOF5BMl5BanBnXkFtZTgwNzE4NTUyNzE@._V1_SX300.jpg" /></a>
                  <div className="caption">
                    <h3>The Big Short</h3>
                    <p>Biography, Drama</p>
                    <p>120 mins</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="thumbnail">
                  <a href="#"><img className="img-responsive" role="presentation" src="http://ia.media-imdb.com/images/M/MV5BMTQ0OTE1MTk4N15BMl5BanBnXkFtZTgwMDM5OTk5NjE@._V1_SX300.jpg" /></a>
                  <div className="caption">
                    <h3>Daddy's Home</h3>
                    <p>Comedy</p>
                    <p>96 mins</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="thumbnail">
                  <a href="#"><img className="img-responsive" role="presentation" src="http://ia.media-imdb.com/images/M/MV5BMjIxOTI0MjU5NV5BMl5BanBnXkFtZTgwNzM4OTk4NTE@._V1_SX300.jpg" /></a>
                  <div className="caption">
                    <h3>Bridge of Spies</h3>
                    <p>Biography, Drama</p>
                    <p>141 mins</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="thumbnail">
                  <a href="#"><img className="img-responsive" role="presentation" src="http://ia.media-imdb.com/images/M/MV5BMTA3Mzc5Nzk0ODReQTJeQWpwZ15BbWU4MDA2ODQxMTcx._V1_SX300.jpg" /></a>
                  <div className="caption">
                    <h3>Life</h3>
                    <p>Biography, Drama</p>
                    <p>111 mins</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="thumbnail">
                  <a href="#"><img className="img-responsive" role="presentation" src="http://ia.media-imdb.com/images/M/MV5BODg5NDM1MDI4NF5BMl5BanBnXkFtZTgwMzg0MzQxNzE@._V1_SX300.jpg" /></a>
                  <div className="caption">
                    <h3>Creed</h3>
                    <p>Drama, Sport</p>
                    <p>133 mins</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="thumbnail">
                  <a href="#"><img className="img-responsive" role="presentation" src="http://ia.media-imdb.com/images/M/MV5BMjM2Nzg4MzkwOF5BMl5BanBnXkFtZTgwNzA0OTE3NjE@._V1_SX300.jpg" /></a>
                  <div className="caption">
                    <h3>Spectre</h3>
                    <p>Action, Adventure, Thriller</p>
                    <p>148 mins</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="thumbnail">
                  <a href="#"><img className="img-responsive" role="presentation" src="http://ia.media-imdb.com/images/M/MV5BNjEzNTk2OTEwNF5BMl5BanBnXkFtZTgwNzExMTg0NjE@._V1_SX300.jpg" /></a>
                  <div className="caption">
                    <h3>Burnt</h3>
                    <p>Comedy, Drama</p>
                    <p>101 mins</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="thumbnail">
                  <a href="#"><img className="img-responsive" role="presentation" src="http://ia.media-imdb.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg" /></a>
                  <div className="caption">
                    <h3>The Martian</h3>
                    <p>Adventure, Comedy, Drama</p>
                    <p>144 mins</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="thumbnail">
                  <a href="#"><img className="img-responsive" role="presentation" src="http://ia.media-imdb.com/images/M/MV5BMTA5MzkyMzIxNjJeQTJeQWpwZ15BbWU4MDU0MDk0OTUx._V1_SX300.jpg" /></a>
                  <div className="caption">
                    <h3>Straight Outta Compton</h3>
                    <p>Biography, Drama</p>
                    <p>147 mins</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="thumbnail">
                  <a href="#"><img className="img-responsive" role="presentation" src="http://ia.media-imdb.com/images/M/MV5BMTUyNjE5NjI5OF5BMl5BanBnXkFtZTgwNzYzMzU3NjE@._V1_SX300.jpg" /></a>
                  <div className="caption">
                    <h3>The Intern</h3>
                    <p>Comedy</p>
                    <p>121 mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="details col-sm-4">
            <div className="row">
              <div className="col-sm-6">
                <img className="poster img-responsive" role="presentation" src="http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg" />
              </div>
              <div className="col-sm-6">
                <h3>Star Wars: The Force Awakens</h3>
                <p className="rating">PG-13</p>
                <p><strong>Genre:</strong> Action, Adventure, Fantasy</p>
                <p><strong>Runtime:</strong> 135 mins</p>
                <p><strong>Released:</strong> 12/18/15</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <h4>Summary</h4>
                <p>Three decades after the defeat of the Galactic Empire, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance.</p>
                <h4>Cast</h4>
                <p>Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))