package Curso;

import java.util.ArrayList;
import java.util.List;

public class Senac {

    private String nome;
    private Double preco;
    private List<String> disciplinas;
    private List<String> alunos;

    public Senac(String nome, List<String> alunos, Double preco, List<String> disciplinas) {
        this.nome = nome;
        this.alunos = new ArrayList<>(alunos);
        this.preco = preco;
        this.disciplinas = new ArrayList<>(disciplinas);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public List<String> getAlunos() {
        return new ArrayList<>(alunos);
    }

    public void setAlunos(List<String> alunos) {
        this.alunos = new ArrayList<>(alunos);
    }

    public List<String> getDisciplinas() {
        return new ArrayList<>(disciplinas);
    }

    public void setDisciplinas(List<String> disciplinas) {
        this.disciplinas = new ArrayList<>(disciplinas);
    }

    public void alterarValor(Double novoValor) {
        this.preco = novoValor;
    }

    public void exibirDetalhes() {

        System.out.println("====================================");
        System.out.println("Nome do curso: " + this.nome);
        System.out.println("Preço do curso: " + this.preco);

        System.out.println("====================================");
        System.out.println("Disciplinas: ");
        System.out.println("====================================");

        for(String disciplina: this.disciplinas) {
            System.out.println("Disciplina: " + disciplina);
        }
        System.out.println("====================================");

        System.out.println("====================================");
        System.out.println("Alunos: ");
        System.out.println("====================================");

        for(String aluno: this.alunos){
            System.out.println("Aluno: " + aluno);
        }

        System.out.println("====================================");

    }

    public void adicionarDisciplina(String disciplina) {
        this.disciplinas.add(disciplina);
    }

    public void adicionarAluno(String nome) {
        this.alunos.add(nome);
    }

    public void removerAluno (String nome) {
        this.alunos.remove(nome);
    }

    public void quantidadeAlunos() {
        System.out.println("Quantidade de alunos: " + this.alunos.size());
    }
}
