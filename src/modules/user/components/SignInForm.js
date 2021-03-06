import React from "react";
import Input from "../../common/input/Input";

const SignInForm = ({handleInput, handleSubmit, username, password, errors, dataIsPopulated}) => (
    <form>
        <div className="row">
            <div className="col">
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
            <div className="col">
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
        </div>
        <div className="form-group row">
            <div className="col-sm-10">
                <Input
                    type="submit"
                    value="Sign-In"
                    onClick={handleSubmit}
                    disabled={!dataIsPopulated}
                    className="btn btn-dark"
                />
            </div>
        </div>
    </form>
);

export default SignInForm;