import Media.MediaAluno;
import BIblioteca.Livro;
import Receita.Receitas;
import Curso.Senac;
import Calculadora.Sequencial;
import Curso.Estudante;

import java.util.List;

public class Main {
    public static void main(String[] args) {

//        Receitas receita1 = new Receitas("Bolo de cenoura", 25.0, List.of("cenoura","ovo","farinha","açucar"));
//        receita1.exibir_detalhes();
//        System.out.println("^^^^ receita criada ^^^^");
//        receita1.alterar_valor(30.0);
//        receita1.exibir_detalhes();
//        System.out.println("^^^^ valor alterado ^^^^");
//        receita1.adicionar_ingrediente("chocolate");
//        receita1.exibir_detalhes();
//        System.out.println("^^^^ ingrediente adicionado ^^^^");
//        receita1.remover_ingrediente("açucar");
//        receita1.exibir_detalhes();
//        System.out.println("^^^^ ingrediente removido ^^^^");
//
//
//        Senac dev_java = new Senac("Desenvolvimento Java", List.of("João","Maria"), 1000.0, List.of("Java","Spring","Hibernate"));
//
//        dev_java.exibirDetalhes();
//        System.out.println("^^^^ curso criado ^^^^");
//        dev_java.alterarValor(1200.0);
//        dev_java.exibirDetalhes();
//        System.out.println("^^^^ valor alterado ^^^^");
//        dev_java.adicionarDisciplina("JPA");
//        dev_java.exibirDetalhes();
//        System.out.println("^^^^ disciplina alterada ^^^^");
//        dev_java.adicionarAluno("José");
//        dev_java.exibirDetalhes();
//        System.out.println("^^^^ aluno adicionado ^^^^");
//        dev_java.quantidadeAlunos();
//        dev_java.removerAluno("José");

        Sequencial sequencial = new Sequencial(List.of(1.0,2.0,3.0,4.0,5.0));

        sequencial.somarTodos();
        sequencial.multiplicarTodos();

        Estudante aluno = new Estudante("João", List.of(10,9,8));
        aluno.adicionarNota(7);
        aluno.calcularMedia();


    }
}