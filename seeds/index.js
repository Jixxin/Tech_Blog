const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const users = [
    {
        username:"JohnDoe",
        password:"password"
    },
    {
        username:"theRealJane123",
        password:"password1"
    },
    {
        username:"Robinator",
        password:"Password1"
    }
]

const blogs = [
    {
        title:"my first blog",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris augue neque gravida in fermentum et. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Consectetur libero id faucibus nisl. Enim nec dui nunc mattis enim ut tellus. Vivamus arcu felis bibendum ut tristique et. Elementum integer enim neque volutpat ac tincidunt vitae semper. Ac tortor vitae purus faucibus ornare suspendisse. At elementum eu facilisis sed. Amet dictum sit amet justo donec. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Libero justo laoreet sit amet cursus sit amet dictum sit. Tristique senectus et netus et malesuada fames ac turpis egestas. Gravida neque convallis a cras semper auctor neque vitae. Facilisis gravida neque convallis a cras. Magna sit amet purus gravida quis blandit turpis. Tellus id interdum velit laoreet id donec ultrices tincidunt. Egestas purus viverra accumsan in.",
        UserId:1
    },
    {
        title:"my final blog",
        body:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        UserId:2
    },
    {
        title:"A blog",
        body:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        UserId:3
    }
]

const feedMe = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

feedMe()