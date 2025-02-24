mkdir userbackend

cd userbackend

npm init

npm i express
npm i mysql
npm i mysql2
npm i cors

// modify package.json 

//    "type": "module",

//    "start": "node index.js"

drop table `users`;

CREATE TABLE `users` (

 `id` int NOT NULL AUTO_INCREMENT,

 `uname` varchar(255) DEFAULT NULL,

 `pword` varchar(255) DEFAULT NULL,

 PRIMARY KEY (`id`)

);

INSERT INTO users (`uname`,`pword`) VALUES ('user1', 'pw1');

INSERT INTO users (`uname`,`pword`) VALUES ('user2', 'pw2');

commit;

select * from users;