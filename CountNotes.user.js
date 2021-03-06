// ==UserScript==
// @name         CountNotes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Count the number of notes in NUService
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js
// @author       Ian Bettison
// @match        https://nuservice.ncl.ac.uk/LDSD.WebAccess.Integrated/wd/object/open.rails?class_name=RequestManagement*
// @match        https://nuservice.ncl.ac.uk/LDSD.WebAccess.Integrated/wd/object/open.rails?class_name=IncidentManagement*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==
/* jshint -W097 */
'use strict';

$(document).ready(function() {
    /*check if there are any notes in the two types of ticket*/
    if($('#_btn_14').length) {
        $('#_btn_14').trigger('click');
    }else if($('#_btn_26').length) {
        $('#_btn_26').trigger('click');
    }
    /*count the number of rows in the table*/
    var rowCount = $('#mainForm-NotesTable >tbody >tr').length;
   
    /*show the count for the number of notes*/
    if(rowCount > 0 ) {
        $('#contentHeader').append($("<div id='showNotes' style='cursor: pointer; position: relative; padding: 3px 0; color: red;'>" + 
           "<img src='https://raw.githubusercontent.com/ibettison/CannedAnswersImages/master/note-taking_icon.jpg' alt='"+rowCount+" note(s)' title='"+rowCount+" note(s)' />"+
           "<div id='showNotes-background' style='position: absolute; top: -5px; left: 415px;'>"+rowCount+"</div></div>"));
    }
    
    $('#showNotes').click(function() {
        $('#mainForm-NotesTable >tBody >tr:first').addClass('listBodyRowActive');
        $('#mainForm-NotesTable').addClass('listFocused');
        $('#mainForm-NotesTable .listBodyCell').trigger('click');
    });
    
});