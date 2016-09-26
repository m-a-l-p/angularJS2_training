export class User {
    name: string;
    password: string;
    age: number;
    weight: number;
    height: number;

    constructor(name: string, password: string, age: number, weight: number, height: number) {
        this.name = name;
        this.age = age;
        this.password = password;
        this.weight = weight;
        this.height = height;
    }

    isOld(): boolean {
        if(this.age >= 30)
            return true;
        else
            return false;
    }

    getBMI(): number {
        //BMI = weight / height^2
        return this.weight / (this.height / 100 * this.height / 100);
    }

    isHealthy(): boolean {
        if (this.getBMI() >= 18.5 && this.getBMI() <= 24.9)
            return true;
        return false;
    }
}
