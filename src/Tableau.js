import React, {Component} from 'react';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Tableau extends Component {
  submit = (e,a) => {
    confirmAlert({
      title: 'Suppression Produit',
      message:a ,
      buttons: [
        {
          label: 'OUI',
          onClick: () => this.props.suppr(e)
        },
        {
          label: 'NON',
          onClick: () => console.log('suppression refusée')
        }
      ],
      
    })
  }


  render() {
    return(
      <div>
      <table className="table table-hover table-bordered">
      <thead>
        <tr className="table-primary">
          <th scope="col" className="act">Id</th>
          <th scope="col">Produits</th>
          <th scope="col">Prix</th>
          <th scope="col" className="act">Actions</th>
        </tr>
      </thead>
      <tbody>
        {this.props.users.length > 0 ? (
          this.props.users.map(user => (
            <tr>
              <td>{user.id}</td>
              <td>{user.Produits}</td>
              <td id="prix">{user.Prix}</td>
              <td>
              
          <button aria-label="Supprimer" id="suppr"
            onClick={() => this.submit(user.id,user.Produits)} className ="btn btn-danger" >X</button>

            <button className ="btn btn-success" id='edit'
            onClick={(e) => {
              confirmAlert({
                  customUI: ({ onClose }) => {
                    return (  
                      <form id='ID'>
                        <center>
                          <div>
                            <input name='input' placeholder={ user.Prix } id="e" className="modifier"></input><br/>
                            
                            <div id="gt"></div>                                             
                            <button id="g" className="btn btn-dark"
                            onClick={() => {
                              e.preventDefault()
                              // var valid="Entrer un nombre";
                              var test = document.forms['ID'].elements['input'].value
                                if (isNaN(test) || test=="") {
                                  var erreur = document.getElementById('gt')
                                   erreur.innerHTML = 'Entrer un nombre'
                                } else {
                                  // valid="";
                                  // document.getElementById('e').innerHTML= val
                                  user.Prix = test;
                                  this.props.updateUser(user.id, user)
                                  //this.props.edit(user.id,user.Prix)
                                  //this.props.editRow(user.id)
                                  onClose();
                                }
                              }
                            } 
                            >Ok</button>

                            <button id="l" className="btn btn-dark" onClick={onClose}>Annuler</button>
                          </div>
                        </center>
                      </form>
                    );
                  }
                })
          }
        }>
              Edit
            </button>
            
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>Aucun enregistrement</td>
          </tr>
        )}
      </tbody>
      </table>
      <button id="total" className="btn btn-success" 
      onClick={
        ()=>{var somme = document.getElementById('total1');
        somme.innerHTML = "TOTAL = "+this.props.somme()+ " Ar";
        }
      }>
             TOTAL
      </button>
      <div id="total1">TOTAL =0Ar</div>
  </div> 
      )
      }
  }

export default Tableau;