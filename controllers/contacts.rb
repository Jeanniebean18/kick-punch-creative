

get "/" do
  erb :"home"
end

post "/contacts" do
  @contact = Contact.create({name:params[:name], phone: params[:phone], email:params[:email], message:params[:message], date:params[:date]})
  if @contact.save
 
    Pony.mail ( {
        :to => 'jeannie@kickpunchcreative.com, shineartdesigns@gmail.com',
        :from => "jeannie@kickpunchcreative.com",
        :subject => "KPC Contact Submission :  #{params[:name]}",
        :body=> "name: #{params[:name]} - phone: #{params[:phone]}- interested in: #{params[:services]} message: #{params[:message]}, --- Contact them at: #{params[:email]}",
        :via => :smtp,
        :via_options => {  
          :address   => 'smtp.gmail.com',  
          :port   => '587',  
          :enable_starttls_auto => true,
          :user_name   => 'jeannie@kickpunchcreative.com',  
          :password   => 'genie1983',  
          :authentication   => :plain,   
          :domain => "kickpunchcreative.com"
      }
      })
    redirect "/success" #should redirect to login after creating contact.
  else
    @error = true
    redirect "/"
  end
end


get "/success" do
erb :success
end

get "/contact/:id" do
  @contact = Contact.find(params[:id])
  @contact.destroy
  redirect "/profile"
end

get "/our-work" do
  erb :work
end

get "/quote" do
  erb :quote
end

get "/our-team" do
  erb :team
end

get "/sitemap" do
  redirect "http://www.kickpunchcreative.com/sitemap.xml"
end


