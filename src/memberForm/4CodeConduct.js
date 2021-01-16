import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { PrimaryButton } from "../components/PrimaryButton";
import { MainContainer } from "../components/MainContainer";
import { Form } from "../components/Form";
import {
  Checkbox, InputLabel, Typography
} from "@material-ui/core";
import * as yup from "yup";

const schema = yup.object().shape({

})

export const CodeOfConduct = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, control, errors } = useForm({
    defaultValues: {
      conductAgreements: data.conductAgreements
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    history.push("./slackconduct");
    setValues(data);
  };


  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <Typography component="h4" variant="h6">
            CYBERDEI ATTENDEES/MEMBERS PERSONAL CODE OF CONDUCT
</Typography>
        </section>
        <section>
          <ul>
            <li>We have a zero tolerance policy regarding harassment against anyone for any reason in our community.</li>
            <li>Harassment or hostile behavior are unwelcome, including speech that intimidates, creates discomfort,or interferes with a person's participation or opportunity for participation, in a conference, event or program.</li>
            <li>Harassment in any form, including but not limited to harassment based on alienage or citizenship, age, color, creed, disability, marital status, military status, national origin, pregnancy, childbirth, and pregnancy related medical conditions, race, religion, sex, gender, veteran status, sexual orientation or any other status protected by laws in which the CyberDEI meeting or event is being held, will not be tolerated.</li>
            <li>Harassment includes the use of abusive or degrading language, intimidation, stalking, harassing, photography or recording, inappropriate physical contact, sexual imagery and unwelcome sexual attention.</li>
            <li>A response that the participant was "just joking," or "teasing," or being "playful," will not be accepted.</li>
            <li>Anyone asked to stop any harassing behavior is expected to comply immediately.</li>
            <li>This Code of Conduct applies to everyone participating at CyberDEI, including attendees, CyberDEI members, CyberDEI Board members, sponsors, partners, speakers, and volunteers.</li>
            <li>Anyone can report harassment. If you are being harassed, notice that someone else is being harassed, or have any other concerns, a Board member should be notified immediately. Board members will investigate and take action accordingly.</li>
            <li>We reserve the right to remove and ban any persons who are not in compliance with our code of conduct.</li>
          </ul>
        </section>
        <section>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="accept-checkbox">
            I agree to the terms and conditions
          </InputLabel>
        </section>
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
