const request = require('supertest');
const db = require('../data/db-config');
const server = require('../server');
const Project = require('./projectModel');

describe('server', function(){
    it('runs the tests', function(){
        expect(true).toBe(true);

    })
    describe('server', function(){
        it('test envirnment', function(){
            expect(process.env.DB_ENV).toBe('testing');
    
        })
    
    
        
    })


    describe('Get /api/projects', function(){
        it('should return 200 OK', function(){
            return request(server).get('/api/projects').then(res => {
                expect(res.status).toBe(200);
            })
    
        })
    })

    describe('post /api/projects for creation', function(){
        it('should return 201 for this post request', function(){
            return request(server).post('/api/projects').send({
                name:"test1",
                description: "test2"
            })
            .then(res => {
                expect(res.status).toBe(201);
            })
    
        })
    })
    
    describe('insert()', function(){
        beforeEach( async () => {
            await db('projects').truncate()
        })  
    
    
        it('post /api/projects for addProject()', async function(){
            await Project.addProject({
                name: "test1",
                description: "test1"
            })
            await Project.addProject({
                name: "test2",
                description: "test2"
            })

            const projectDb = await db('projects');
            expect(projectDb).toHaveLength(2);

            
        
            })
        })
        describe('delete /api/projects/:id for delete', function(){
            it('should return 204 for this delete request', function(){
                return request(server).delete('/api/projects/1')
                .then(res => {
                    expect(res.status).toBe(204);
                })
        
            })
        })

        describe('delete()', function(){
            beforeEach(async() => {
                await db('projects').truncate();  //remove all data from database
            })
            it('remove a project from the db', async function(){

                // check that the table is empty
               
                const dbProject = await db('projects');
                expect(dbProject).toHaveLength(0);
            })


                // add a project
            describe('add a project', function() {
                    it('add a project here', async function() {

                    await Project.addProject({
                    name: 'test1',
                    description:'test1'
                    })
 // check that the project is there
                     const project  = await db('projects');
                    expect(project).toHaveLength(1);
                })

               
                })
                
                // delete the project

            describe('delete the project', function() {
                it('delete the project', async function(){
                   await Project.deleteProject(1)

                   const project = await db('projects')
                    expect(project).toHaveLength(0);
                })

                


            })
               

                
          
        })



})

