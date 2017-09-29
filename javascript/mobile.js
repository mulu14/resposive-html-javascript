/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* this code not part of the current assignment
 * 
 * @type type
 * 
 */

$(document).ready(function(){
  $(".menu").click(function(){
      $(".side-navbar").toggleClass("active-navbar"); 
      $(".page-view").toggleClass("shift-page"); 
      $(".header-logo").toggleClass("disabled-logo"); 
  }); 
})


