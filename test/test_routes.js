var app = require('../app.js');
var request = require('supertest');

describe('GET /', function(){
  it('should return /', function(done){
    request(app).get('/')
    .end(function(error, response){
      if (error) return done(error);
      done();
    });
  });
});

describe('GET /vision', function(){
  it('should return /vision', function(done){
    request(app).get('/vision')
    .end(function(error, response){
      if (error) return done(error);
      done();
    });
  });
});

describe('GET /weddings', function(){
  it('should return /weddings', function(done){
    request(app).get('/weddings')
    .end(function(error, response){
      if (error) return done(error);
      done();
    });
  });
});

describe('GET /corporate-events', function(){
  it('should return /corporate-events', function(done){
    request(app).get('/corporate-events')
    .end(function(error, response){
      if (error) return done(error);
      done();
    });
  });
});

describe('GET /school-events', function(){
  it('should return /school-events', function(done){
    request(app).get('/school-events')
    .end(function(error, response){
      if (error) return done(error);
      done();
    });
  });
});

describe('GET /private-parties', function(){
  it('should return /private-parties', function(done){
    request(app).get('/private-parties')
    .end(function(error, response){
      if (error) return done(error);
      done();
    });
  });
});

describe('GET /contact-us', function(){
  it('should return /contact-us', function(done){
    request(app).get('/contact-us')
    .end(function(error, response){
      if (error) return done(error);
      done();
    });
  });
});
