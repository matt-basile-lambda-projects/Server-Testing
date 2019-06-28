const db = require('../data/dbConfig.js');
const Users = require('././users-model');


describe('users model', () => {
    describe('add()', () => {
        afterAll(async ()=>{
         await db('users').truncate();
        });

        it('should add the provided users to db', async() => {
            const user = await Users.add({username: 'Sammy', slogan: "Badaboop"})
            
            expect(user.username).toBe('Sammy')
        });
        it('should add multiple user to db', async() => {
            await Users.add({username: 'Matty', slogan: "yoyoyooy"})
            await Users.add({username: 'Gaffer', slogan: "oooo"})
            const users = await db('users')
            
            expect(users).toHaveLength(3)
        });
        describe('remove()', () => {
            it('should remove provided user', async() => {
                const count = await Users.remove(1)
                const users = await db('users');
                expect(count).toBe(1)
                expect(users).toHaveLength(2)
            }); 
        });
        describe('find()', () => {
            it('should return the array of users', async() => {
                const users = await Users.find();
                expect(users).toHaveLength(2);
            });
        });   
        
    });
    
});