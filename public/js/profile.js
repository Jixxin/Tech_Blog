console.log("hello")
document.querySelector("#newBlog").addEventListener("submit",e=>{
    e.preventDefault()
    const blogObj = {
        title:document.querySelector("#title").value,
        body:document.querySelector("#body").value,
    }
    fetch("/api/blogs",{
        method:"POST",
        body:JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})

const deleteBtnEl=document.querySelectorAll('.deleteBtn')

for (const deleteBtn of deleteBtnEl) {
    deleteBtn.addEventListener('click', deleteEvent);
    async function deleteEvent(e) {
        if (confirm("ARE YOU SURE YOU WANT TO PERMANENTLY DELETE BLOG POST?")) {
            const response = await fetch(`/api/blogs/${e.target.value}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                location.reload();
            } else {
                alert('Failed to delete');
            }
        }
    }
}