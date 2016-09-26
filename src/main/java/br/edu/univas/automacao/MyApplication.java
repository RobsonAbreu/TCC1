package br.edu.univas.automacao;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
<<<<<<< HEAD
package br.edu.univas.automacao;
=======
>>>>>>> 2d4a93915344b92512c404fbbbb2d8fc2208c67a

import javax.ws.rs.ApplicationPath;
import org.glassfish.jersey.server.ResourceConfig;

/**
 *
 * @author Rubem
 */
@ApplicationPath("rest")
public class MyApplication extends ResourceConfig{
    public MyApplication(){
        packages("br.edu.univas.automacao.controllers");
    }
}
