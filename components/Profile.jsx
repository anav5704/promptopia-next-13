import PromptCard from "./PromptCard"

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left"><span className="blue_gradient">{name}</span> Profile</h1>
      <p className="desc text-left">{desc}</p>
      <div className="prompt_layout mt-16">
        {data.map(prompt => <PromptCard key={prompt._id} prompt={prompt} handleEdit={() => handleEdit && handleEdit(prompt)} handleDelete={() => handleDelete && handleDelete(prompt)}/>)}
    </div>  
    </section>
  )
}

export default Profile
