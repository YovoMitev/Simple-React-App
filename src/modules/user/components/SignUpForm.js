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
                className="form-control"
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
                className="form-control"
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
                className="form-control"
            />
        </div>
        <div className="form-group">
            <Input
                type="submit"
                value="Sign-Up"
                onClick={handleSubmit}
                className="btn btn-dark"
            />
        </div>
    </form>
);

export default SignUpForm;