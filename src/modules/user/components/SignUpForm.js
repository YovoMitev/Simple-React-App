import React from "react";
import Input from "../../common/input/Input";

const SignUpForm = ({handleInput, handleSubmit, name, username, password, errors}) => (
    <form>
        <div className="form-group">
            <Input
                type="text"
                name='name'
                placeholder="Name"
                value={name}
                onChange={handleInput}
                error={errors.name}
            />
        </div>
        <div className="form-group">
            <Input
                type="text"
                name='username'
                placeholder="Username"
                value={username}
                onChange={handleInput}
                error={errors.username}
            />
        </div>
        <div className="form-group">
            <Input
                type="password"
                name='password'
                placeholder="Password"
                value={password}
                onChange={handleInput}
                error={errors.password}
            />
        </div>
        <div className="form-group">
            <Input
                type="submit"
                name="Sign-Up"
                onClick={handleSubmit}
            />
        </div>
    </form>
);

export default SignUpForm;