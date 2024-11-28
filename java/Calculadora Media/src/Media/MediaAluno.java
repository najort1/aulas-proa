package Media;

public class MediaAluno {

    double nota1;
    double nota2;
    double nota3;
    double nota4;

    public MediaAluno(double nota1, double nota2, double nota3, double nota4) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }

    public double calcularMedia() {
        return (nota1 + nota2 + nota3 + nota4) / 4;
    }

    public void exibirMedia() {

        if(calcularMedia() >= 7) {
            System.out.println("Aprovado Media: " + calcularMedia());
        }else if (calcularMedia() >= 5) {
            System.out.println("Recuperação Media: " + calcularMedia());
        }else {
            System.out.println("Reprovado Media: " + calcularMedia());
        }

    }

    public double getNota1() {
        return nota1;
    }

    public void setNota1(double nota1) {
        this.nota1 = nota1;
    }

    public double getNota2() {
        return nota2;
    }

    public void setNota2(double nota2) {
        this.nota2 = nota2;
    }

    public double getNota3() {
        return nota3;
    }

    public void setNota3(double nota3) {
        this.nota3 = nota3;
    }

    public double getNota4() {
        return nota4;
    }

    public void setNota4(double nota4) {
        this.nota4 = nota4;
    }
}
