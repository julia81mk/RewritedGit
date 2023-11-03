import { faker } from '@faker-js/faker';

export function getFileMeta() {
    const fileName = faker.lorem.word();
    const fileBody = faker.lorem.paragraph(2);
    return { fileName, fileBody };
}
