(function() {
    var app = angular.module('blog', []);

    app.controller('UsersController',  function ($http) {
        var self = this;
        this.showUser=false;
        this.userId=-1;
        self.users = [];
        $http.get('http://jsonplaceholder.typicode.com/users').then(function (response){
            self.users=response.data;
        });

        this.canShowUser=function(){
            return this.showUser;
        }

        this.toggleUserData=function(userId){
            this.showUser=!(this.showUser);
            this.userId=userId;
        }

        function getUsersByID(user,id){
            if(user.id===id){
                return user;
            }
        }
        this.findUserByPost=function(postUserId){
            this.users.filter(function(user){
                return user.id===postUserId;
            })[0];
        }

    });


    app.controller('PostController',function($http){
        var self=this;
        self.posts=[];
        $http.get('http://jsonplaceholder.typicode.com/posts').then(function(response){
            self.posts=response.data;
        });
        this.showPost=false;
        this.postId=-1;

        this.getshowPost=function(){
            return this.showPost;
        };
        this.togglePost=function(postId){
          this.showPost=!(this.showPost);
            this.postId=postId;

        };
        this.getComment=function(postId){
            var result=[];
            for(com in this.comments){
                if(com.postId==postId){
                    result.push(comment);
                }
            }
            return result;
        }
    });

    app.controller('CommentsController',function($http){
        var self=this;
        self.comments=[];
        $http.get('http://jsonplaceholder.typicode.com/comments').then(function(response){
            self.comments=response.data;
        });


    });





})();