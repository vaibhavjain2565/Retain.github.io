var model={
    init: function() {
            if (!localStorage.note) {
                localStorage.note = JSON.stringify([]);
            }
        },
        add: function(obj) {
            var data = JSON.parse(localStorage.note);
            data.push(obj);
            localStorage.note = JSON.stringify(data);
        },
        getAllNotes: function() {
            return JSON.parse(localStorage.note);
        }
};

var octopus={
    init:function(){
        model.init();
        view.init();
    },
    getAllData:function(){
        return model.getAllNotes();
    },
    addData:function(value){
        model.add({content: value});
        view.render();
    }

};

var view={
    init:function(){
        this.form=$("#new_note");
        this.input=$("#new_note_content");
        this.list=$("#notes");
        this.form.submit(function(e){
            octopus.addData(this.input.val());
            console.log(this.input);
            this.input.val('');
            e.preventDefault();
        });
        this.render();
    },
    render:function(){
        this.list.empty();
        var all_notes=octopus.getAllData();
        for(var i=0;i<all_notes.length;i++){
           this.list.append("<li class='note' id='note'>"+all_notes[i]+"</li>");
        }
    }
};

octopus.init();