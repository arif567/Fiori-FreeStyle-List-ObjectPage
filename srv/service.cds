using { db } from '../db/script';

service MyService {
    entity Student as projection on db.Student;
    entity StudentInfo as projection on db.StudentInfo;
}