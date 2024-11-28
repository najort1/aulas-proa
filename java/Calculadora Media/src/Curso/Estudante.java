package Curso;

import java.util.ArrayList;
import java.util.List;

public class Estudante {

    private String nome;
    private List<Integer> notas;


    public Estudante(String nome, List<Integer> notas) {
        this.nome = nome;
        this.notas = new ArrayList<>(notas);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public List<Integer> getNotas() {
        return notas;
    }

    public void setNotas(List<Integer> notas) {
        this.notas = notas;
    }

    public Double calcularMedia(){
        if(this.notas.isEmpty()){
            return 0.0;
        }

        Double soma = 0.0;
        for (Integer nota : this.notas) {
            soma += nota;
        }

        System.out.println("Média: "+soma/this.notas.size());
        return soma/this.notas.size();
    }

    public void adicionarNota(Integer nota){
        System.out.println("Nota adicionada: "+nota);
        this.notas.add(nota);
    }



}
