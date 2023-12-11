import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function page() {
  return (
    <div className="w-full min-h-screen">
      <Wrapper>
        <div className="w-full h-auto ">
          <div className="w-full flex flex-col justify-center items-center py-12">
            <h1 className="text-5xl text-center font-bold font-serif">Course Checkout</h1>
            <div className="flex flex-col justify-center md:flex-row w-full h-auto mt-8  gap-8 ">
                {/* left part  */}
              <div className="flex flex-col gap-4 w-full md:w-[35%]  h-full  ">
                {/* login  */}
                <div className="flex flex-col gap-4 w-full h-auto  md:p-8 md:shadow-xl md:mt-6">
                  <h1 className="font-bold text-3xl">Login</h1>
                  <div>
                    <h1>Username</h1>
                    <Input type="text" placeholder="Username or email" />
                  </div>
                  <div>
                    <h1>Password</h1>
                    <Input type="password" placeholder="Password" />
                  </div>

                  <div className="flex justify-between">
                    <h1>Remember me</h1>
                    <h1>Forgot password?</h1>
                  </div>
                  <Button className="w-full h-12 bg-[#344A80] text-white">
                    Login
                  </Button>
                </div>
                {/* login buttom part  */}
                <div className="w-full my-4 h-auto bg-accent p-8 font-light text-md">
                  <p>
                    You can use these credentials for demo testing: <br />{" "}
                    Login: test <br />
                    Password: test123
                  </p>
                </div>
              </div>
              {/* register  */}
              <div className="w-full md:w-[50%] h-auto ">
                <div className="flex flex-col gap-4 md:p-8 md:shadow-xl">
                  <h1 className="font-bold text-3xl">Register</h1>
                  <div>
                    <h1>Username</h1>
                    <Input type="text" placeholder="Username" />
                  </div>
                  <div>
                    <h1>Email</h1>
                    <Input type="text" placeholder="Email" />
                  </div>
                  <div>
                    <h1>Password</h1>
                    <Input type="password" placeholder="Password" />
                  </div>
                  <p className="text-md font-light">
                    The password should be at least twelve characters long. To
                    make it stronger, use upper and lower case letters, numbers,
                    and symbols like ! " ? $ % ^ & )
                  </p>

                  <Button className="w-80 h-12 bg-[#344A80] text-white">
                    Register
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
