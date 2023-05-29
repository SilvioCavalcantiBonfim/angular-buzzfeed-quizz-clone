export type Quizz = { 
    title: string; 
    questions: { 
        id: number; 
        question: string; 
        img: string;
        options: { 
            id: number; 
            name: string; 
            alias: string; 
        }[]; }[]; 
        results: { 
            [key: string]: string;  
        }; 
    }