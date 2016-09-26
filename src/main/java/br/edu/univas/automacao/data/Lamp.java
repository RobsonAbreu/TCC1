/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.edu.univas.automacao.data;

/**
 *
 * @author Note
 */
public class Lamp {
   
  //Variavel booleana, Verdadeiro / Falso
  private boolean estadoDaLampada;
 
  //Classe principal 
  public Lamp(boolean x) { 
    this.estadoDaLampada = x; 
  } 
 
  //Metodo Acende Lampada 
  public void acende(){ 
    this.estadoDaLampada=true; 
  } 
 
  //Metodo Apaga Lampada 
  public void apaga(){ 
    this.estadoDaLampada=false; 
  } 
 
  //Metodo Mostra Resultado 
  public void mostraResultado(){ 
    //Se o estado da lampada for Verdadeiro
    if(this.estadoDaLampada){ 
      
    } 
    else{ 
      
    } 
  } 
}
    
}
