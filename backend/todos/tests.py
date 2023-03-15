from django.test import TestCase

# Create your tests here.



"""


Django provide default User model...  -> name, firstname, lastname, email, password

We want to few more feilds -> username, email,image,phone , address,first_name,last_name, gender






THere are different kind of authentication methods...  
        1. session authentication
        2. token authentication (single token)
        3. JWT authentication (combination of above both) (provide how long this token should be valid) (two things,, one is token and another is refresh token)

Token Authentication -> user is login,  The backend will provide a token to authenticate.. 

                what is this token ??  

                backend will ask the client to send a token of the current user..  so i can validate that token and send the particular data..


Django rest Framework -> return data in json format (to convert data into json and provide addtitional features we use.  Serializer)

Serializer -> 1. Map to model
              2. Provide the fields to handles
              3. extra_feilds -> specify condtions



html(template) files are connected to django
csrf  -> data is displayed directly in the templates..
session. --> login details..

            backend  -> django project "Todo" (django,  django_rest_framework,  token_authentication,  Serializers, Swagger UI (for API Doucmentation))

                        -> Authentication  -> 1. SignUp (register)
                                              2. Login  -> return "token" (We have to save this in our frontend or client application)
                        -> Update user details 
                        -> delete user etc.

                        -> Todo -> 1. Create a todo
                                   2. Edit a todo
                                   3. delete a todo
                                   4. completed todo

                                    CRUD operations (create, read, update and delete)


            frontend -> react application.
                        -> authentication -> 1.SignUp
                                             2. Login
                                            3. Home page
                                            4. create todo
                                            5. edit todo
                                            6. delete todo
                                            7. completed status update








"""