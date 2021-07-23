create database if not exists up_tasks;

drop database up_tasks;

insert into roles (name, createdAt, updatedAt) 
values 
("ADMIN", now(), now()),
("USER", now(), now()),
("SUPERUSER", now(), now());

insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('3180d599-679c-430e-b2c7-ca23ac0c010b', 'rjentges0@uiuc.edu', 'NhTBAdh', true, '2020-10-02', '2021-02-02', 1);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('6a6f5662-a334-4060-85d2-1dd020bb5f87', 'tgero1@360.cn', 's5M2a1Au', true, '2021-03-12', '2021-01-21', 2);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('44d643b3-b67f-4ebc-8a43-a922327c2848', 'skaesmans2@si.edu', 'rmCzW7gyYRX', false, '2021-04-14', '2021-03-24', 3);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('fd2b36cf-8311-41f0-9dd4-136a6c4c9ad1', 'acaudwell3@va.gov', 'gPQrFh', true, '2020-09-11', '2021-06-17', 1);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('dbac4d2b-2dd5-4f18-9af0-3ccd22b7861e', 'hwetter4@sitemeter.com', 'BwLE2IZ65c', false, '2020-10-14', '2021-03-18', 2);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('2d7aa89d-f978-46ad-b19d-ef5ecf1854e4', 'lbrook5@drupal.org', 'ET7t4g2LdAkH', true, '2021-06-07', '2020-09-13', 3);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('0c42481c-6f0b-4a70-88af-a2df22ec264b', 'sgalland6@ibm.com', 'GHshLfGm', true, '2020-12-11', '2020-10-09', 1);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('8ac6b1fd-93e3-443f-8497-365d34172ae3', 'bbareford7@taobao.com', 'LuJ5ZhH9PpGf', false, '2021-01-08', '2021-02-28', 2);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('8b4042ab-694a-4e94-8263-4bbcc158ecd4', 'zjendrys8@va.gov', 'ZRHNH0NlIDT', true, '2021-05-14', '2020-09-08', 3);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('682fda92-8b4f-4a45-ab78-5cfa4cf5df53', 'sdyerson9@time.com', 'S8mnN9nA55r8', true, '2021-03-08', '2021-01-04', 1);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('8d312a6a-34f4-480b-be1f-251bac5564f7', 'ssquirea@163.com', 'oFOZLCm9', true, '2020-08-07', '2021-06-09', 2);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('86b7d079-b754-4457-9aa9-89f812e240ee', 'gbraizierb@nifty.com', 'rDfjHK5m76', true, '2020-08-06', '2020-11-29', 3);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('5407a800-b7ad-4c9f-ab52-3ad422c3f9f4', 'psongerc@google.ca', 'R5pl2Rjh962T', false, '2020-12-16', '2021-03-17', 1);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('75bc0517-ae01-44dc-9bf9-67ca16453461', 'pbullcockd@opensource.org', 'PZpxlp', false, '2020-08-09', '2021-06-26', 2);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('b23270ef-7388-4071-a0b7-c7ec8b184888', 'mfeechane@technorati.com', '8lkRdvgyZYDl', false, '2020-11-29', '2021-05-12', 3);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('13c11c48-9ee2-4906-9dd7-a42661220641', 'ptyref@last.fm', 'XH3YaY', false, '2021-02-24', '2020-10-23', 1);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('e167341d-7e80-401b-a1a3-b83096df6dc4', 'rcowderayg@comcast.net', 'H7DR7Iw', true, '2021-01-12', '2020-09-22', 2);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('886895cc-f35f-4d76-aa00-5161505a4f96', 'sclewlowh@prweb.com', 'u2QRXdM', false, '2021-07-06', '2021-01-19', 3);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('447de00a-ff96-4bea-830d-53a892aaae5a', 'tstalmani@boston.com', 'NDgYf0D', false, '2020-09-27', '2021-05-16', 1);
insert into users (id, email, password, is_active, createdAt, updatedAt, roleId) values ('d0de6383-b9b6-4ebf-b2df-d1501896545d', 'rswornj@zdnet.com', 'y6amRB', true, '2021-05-02', '2021-02-21', 2);