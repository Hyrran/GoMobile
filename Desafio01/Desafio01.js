const jobOne = {
    id: 1,
    payload: {
        filename: 'file1.txt',
        body: 'exemplo de conteudo 1'
    }
};
const jobTwo = {
    id: 2,
    payload: {
        filename: 'file2.txt',
        body: 'exemplo de conteudo 2'
    }
};

const myWorker = function myWorker(_job) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(new Date(), _job);
            resolve();
        }, 1000)
    })
}   

class Fila
{
    constructor(worker)
    {
        this.worker = worker;
        
        this.jobs = [];
    }
    
    addJob(job) {
        this.jobs.push(job);
        
        this.worker(this.jobs);

        this.removeJob(job.id);
    }
    
    getJobs() {
        return this.jobs;
    }
    
    removeJob(id) {
        this.jobs = this.jobs.filter(function (job) {
            return job.id !== id;
        })
    }
    
    removeAllJobs() {
        this.jobs = [];
    }
}

var fila = new Fila(myWorker);
fila.addJob(jobOne);
fila.addJob(jobTwo);