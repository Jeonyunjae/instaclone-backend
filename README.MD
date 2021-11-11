# Instaclone

Instaclone Backend.

## User:

- [x] Create Account
- [x] See Profile
- [x] Login
- [x] Edit Profile
- [x] Change Avatar (Image Upload)
- [x] Follow User
- [x] Unfollow User
- [x] See Followers w/ Pagination
- [x] See Following w/ Pagination
- [x] Computed Fields
- [x] Search Users

## Photos

- [x] Upload Photo (Parse #)
- [x] See Photo
- [x] See Hashtag
- [x] Search Photos
- [x] Edit Photo
- [x] Like / Unlike Photo
- [x] See Photo Likes
- [x] See Feed
- [x] See Photo Comments
- [x] Delete Photo

## Comments

- [x] Comment on Photo
- [x] Delete Comment
- [x] Edit Comment

## Refactor

- [x] Mutation Responses

## Extras

- [x] S3 Image Upload

## DMs

- [x] See Rooms
- [x] Send Message (Create Room)
- [x] See Room
- [ ] Computed Fields
- [ ] Realtime Messages




=================================
6.5 seePhoto
---------------------------------

로그인해서 인증을 해야만 접근이 가능

token은 패킷의 해더에 들어감


=================================
6.9 Authentication 
---------------------------------
해더에 아래의 인자 입력

{
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMzNTg5ODE1fQ.kiyigKbJnAMToSqKdeS27SREMUCXmKbdr1hdOwNIcNY"
}


=================================
4.8 Create Account part
---------------------------------

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMxNjM4NjQyfQ.e-JwHJ7yD7k231Ln49cK9BD1xh1pj82yDNNolZBHfN4"


mutation{
  editProfile(email:"nico@las.com", token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMxNjM4NjQyfQ.e-JwHJ7yD7k231Ln49cK9BD1xh1pj82yDNNolZBHfN4"){
    ok
    error
  }
}

=================================

=================================
4.4 Login part
---------------------------------

로그인 기능 추가

mutation{
  login(username:"nico",password:"123"){
    ok
    token
    error
  }
}

jwt 방식 사용



=================================
4.2 Create Account part
---------------------------------

계정 만들기
bcrypt 설치 비밀번호 해쉬로 변경


mutation{
  createAccount(
    firstName:"Nico"
    lastName:"las"
    email:"nico@las.com"
    password:"123"
    username:"nico"
  ){
    username
  }
}


=================================

=================================
3.11 Dotenv 설정
---------------------------------

환경 변수 설정

=================================


=================================
3.10 Architecture part Two
---------------------------------

강의에서 사용하던 함수 loadFilesSync, makeExecutableSchema, mergeResolvers,mergeTypeDefs
함수에 버전 업이 되면서 사라진거같음 그래서 npm install graphql-tools@7.0.2 명령어 사용하면 가능

=================================

=================================
3.8 Prisma Studio
---------------------------------

npx prisma studio 

=================================

=================================
3.3 POC API
---------------------------------

API 내용 작성

=================================

=================================
3.2 babel
---------------------------------

babel(자바스크립트 노트 버전 동기화???) 설치

=================================

=================================
3.1 Apollo Server
---------------------------------

GraphQL, Apollo Server, nodemon 설치

=================================

=================================
3.0 Setup
---------------------------------
1. command palette ( command + shift + p)
2. git 추가 방법
  -> git add .
  -> git commit -m "내용"
  -> git push origin master
=================================


=================================

=================================

=================================

=================================

=================================