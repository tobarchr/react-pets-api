import React from 'react';

const Form = props => {
    return (
        <div>
            <div className="row mt-4">
                <div className="col-sm 2"></div>
                <div className="col-sm 8">
                    <form>
                        <div className="row">
                            <div className="col form-group">
                                <label>Pet Name:</label>
                                <input type="text" name="name" className="form-control" onChange={props.onChangeHandler} value={props.form.name} />
                                {
                                    props.error.name ? <div className="alert alert-danger" role="alert">{props.error.name.message}</div> : ""
                                }
                            </div>
                            <div className="col form-group">
                                <label>Skill 1:</label>
                                <input type="text" name="skill_1" className="form-control" onChange={props.onChangeHandler} value={props.form.skill_1} />
                                {
                                    props.error.skill_1 ? <div className="alert alert-danger" role="alert">{props.error.skill_1.message}</div> : ""
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <label>Pet Type:</label>
                                <input type="text" name="type" className="form-control" onChange={props.onChangeHandler} value={props.form.type} />
                                {
                                    props.error.type ? <div className="alert alert-danger" role="alert">{props.error.type.message}</div> : ""
                                }
                            </div>
                            <div className="col form-group">
                                <label>Skill 2:</label>
                                <input type="text" name="skill_2" className="form-control" onChange={props.onChangeHandler} value={props.form.skill_2} />
                                {
                                    props.error.skill_2 ? <div className="alert alert-danger" role="alert">{props.error.skill_2.message}</div> : ""
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <label>Pet Description:</label>
                                <input type="text" name="description" className="form-control" onChange={props.onChangeHandler} value={props.form.description} />
                                {
                                    props.error.description ? <div className="alert alert-danger" role="alert">{props.error.description.message}</div> : ""
                                }
                            </div>
                            <div className="col form-group">
                                <label>Skill 3:</label>
                                <input type="text" name="skill_3" className="form-control" onChange={props.onChangeHandler} value={props.form.skill_3} />
                                {
                                    props.error.skill_3 ? <div className="alert alert-danger" role="alert">{props.error.skill_3.message}</div> : ""
                                }
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm 2"></div>
            </div>
        </div>
    )
}

export default Form;