package Calculadora;

import java.util.ArrayList;
import java.util.List;

public class Sequencial {

    private List<Double> numeros;

    public Sequencial(List<Double> numeros) {
        this.numeros = new ArrayList<>(numeros);
    }


    public List<Double> getNumeros() {
        return numeros;
    }

    public void setNumeros(List<Double> numeros) {
        this.numeros = numeros;
    }

    public Double somarTodos(){

        if(this.numeros.isEmpty()){
            return 0.0;
        }

        Double soma = 0.0;
        for (Double numero : this.numeros) {
            soma += numero;
        }

        System.out.println("Soma: "+soma);

        return soma;
    }

    public void adicionarValor(Double valor){
        this.numeros.add(valor);
    }

    public Double multiplicarTodos(){

        if(this.numeros.isEmpty()){
            return 1.0;
        }

        Double multiplicacao = 1.0;
        for (Double numero : this.numeros) {
            multiplicacao *= numero;
        }
        System.out.println("Multiplicação: "+multiplicacao);
        return multiplicacao;
    }

}
