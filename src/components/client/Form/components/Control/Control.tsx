import * as React from "react";

import PropTypes from "prop-types";

import {
  STATE_ACTION_TYPE,
  useFormStateActionContext,
  useFormStateContext,
  useStaticPropsContext,
} from "@components/client/Form/index";

export type RenderArgs = {
  fieldName: string;
  error: string;
  value: string;
  ref: any;

  onBlur: () => void;
  onChange: (e: React.ChangeEvent<any>) => void;
};

export interface ControlProps {
  fieldName: string;
  render: ({ error, value, ref, onBlur, onChange }: RenderArgs) => any;
}

export const Control: React.FC<ControlProps> = ({ fieldName, render }) => {
  const { errors = {}, values = {}, touched = {} } = useFormStateContext();

  const { fieldRef } = useStaticPropsContext();

  const displatch = useFormStateActionContext();

  const ref = React.useRef<any>(null);

  const value = values[fieldName] || "";
  const error = errors[fieldName] && touched[fieldName] ? (errors[fieldName] as string) : "";

  /**
   * Handlers
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target.value;

    displatch({
      type: STATE_ACTION_TYPE.UPDATE_VALUE,
      payload: {
        [fieldName]: value,
      },
    });
  };

  const handleBlur = () => {
    if (!touched[fieldName]) {
      displatch({
        type: STATE_ACTION_TYPE.SET_TOUCHED,
        payload: {
          [fieldName]: true,
        },
      });
    }
  };

  /** Init field ref **/
  React.useEffect(() => {
    fieldRef?.safeSet([fieldName], {
      [fieldName]: {
        _field: {
          ref: ref?.current,
          name: fieldName,
        },
      },
    });
  }, []);

  return render({ fieldName, ref, error, value, onBlur: handleBlur, onChange: handleChange });
};

export default Control;

Control.propTypes = {
  render: PropTypes.func.isRequired,
  fieldName: PropTypes.string.isRequired,
};
