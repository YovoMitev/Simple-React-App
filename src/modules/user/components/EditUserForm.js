import React from "react";
import Input from "../../common/input/Input";

const EditUserForm = ({handleInput, handleSubmit, name, password,
                          errors, handleShowPassword, showPassword}) => (
    <form>
        <div className="row">
            <div className="col">
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
            <div className="col">
                <Input
                    type={showPassword ? "text" : "password"}
                    name='password'
                    placeholder="Password"
                    value={password}
                    onChange={handleInput}
                    error={errors.password}
                    className="form-control"
                />
            </div>
            <div className="col">
                <Input
                    type="checkbox"
                    placeholder="Show Password"
                    onChange={handleShowPassword}
                    className="form-control"
                />
            </div>
        </div>
        <div className="form-group row">
            <div className="col-sm-10">
                <Input
                    type="submit"
                    value="Edit"
                    onClick={handleSubmit}
                    className="btn btn-dark"
                />
            </div>
        </div>
    </form>
);

export default EditUserForm;