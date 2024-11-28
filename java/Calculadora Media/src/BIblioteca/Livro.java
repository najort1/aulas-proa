package BIblioteca;

import java.util.ArrayList;
import java.util.List;

public class Livro {

    String titulo;
    Integer ano;
    Boolean disponivel;
    List<String> autores;
    List<Integer> capitulos;

    public List<String> getAutores() {
        return autores;
    }

    public void setAutores(List<String> autores) {
        this.autores = autores;
    }

    public List<Integer> getCapitulos() {
        return capitulos;
    }

    public void setCapitulos(List<Integer> capitulos) {
        this.capitulos = capitulos;
    }

    public Livro(String titulo, Integer ano, Boolean disponivel) {
        this.titulo = titulo;
        this.ano = ano;
        this.disponivel = disponivel;
        this.autores = new ArrayList<>();
        this.capitulos = new ArrayList<>();

    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }


    public Integer getAno() {
        return ano;
    }

    public void setAno(Integer ano) {
        this.ano = ano;
    }

    public Boolean getDisponivel() {
        return disponivel;
    }

    public void setDisponivel(Boolean disponivel) {
        this.disponivel = disponivel;
    }

    public void devolver(){
        setDisponivel(true);
        System.out.println("Livro devolvido");
    }

    public void emprestar(){
        if(getDisponivel() == true){
            setDisponivel(false);
            System.out.println("LIVRO EMPRESTADO");
        }else{
            System.out.println("Livro nao pode ser emprestado");
        }
    }

    public void informacoes(){
        System.out.println("Ano: "+getAno());
        System.out.println("Titulo: "+getTitulo());
        System.out.println("Disponivel: " + (getDisponivel() ? "Sim" : "Nao"));
        System.out.println("Autores: "+String.join(" | ",getAutores()));
        System.out.println("Capitulos: "+String.join(" | ",getCapitulos().toString()));

    }

}
