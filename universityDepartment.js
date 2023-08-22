class University{
    constructor(name){
        this.name = name;
        this.departments= [];
    }

    addDepartName(department){
        this.departments.push(department);
        console.log(`Departmetn "${department}" is added in the ${this.name}.`);
    }

    removeDepartment(department){
        const index  = this.departments.indexOf(department);

        if(index !== -1){
            this.departments.splice(index,1);
            console.log(`Department "${department}" is removed `);
        }else{
            console.log(`Department "${department}" does not exist in this ${this.name}`);
        }
    }

    displayDepartment(){
        if(this.departments.length === 0){
            console.log(`Departments in this ${this.name}`);
            console.log(`No department available.`);
        }
        else{
            this.departments.forEach((department,index) =>{
                console.log(`${index +1}. ${department}`);
            });
        }
    }
}

const university = new University('Aliah University');

university.displayDepartment();

university.addDepartName('Computer Science');
university.addDepartName('Mathematics');
university.addDepartName('Physics');
university.addDepartName('Biology');

university.displayDepartment();

university.removeDepartment('Biology');
university.displayDepartment();

university.removeDepartment('Chemisty');



