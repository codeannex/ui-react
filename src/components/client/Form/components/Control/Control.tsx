import * as React from "react";

import PropTypes from "prop-types";

import {
  STATE_ACTION_TYPE,
  useFormStateActionContext,
  useFormStateContext,
  useStaticPropsContext,
} from "@components/client/Form/index";

export type RenderArgs = {
  field: string;
  error: string;
  value: string;
  ref: any;

  onBlur: () => void;
  onChange: (e: React.ChangeEvent<any>) => void;
};

export interface ControlProps {
  field: string;
  render: ({ error, value, ref, onBlur, onChange }: RenderArgs) => any;
}

export const Control: React.FC<ControlProps> = ({ field, render }) => {
  const { errors = {}, values = {}, touched = {} } = useFormStateContext();

  const { fieldRef } = useStaticPropsContext();

  const displatch = useFormStateActionContext();

  const ref = React.useRef<any>(null);

  const value = values[field] || "";
  const error = errors[field] && touched[field] ? (errors[field] as string) : "";

  /**
   * Handlers
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target.value;

    displatch({
      type: STATE_ACTION_TYPE.UPDATE_VALUE,
      payload: {
        [field]: value,
      },
    });
  };

  const handleBlur = () => {
    if (!touched[field]) {
      displatch({
        type: STATE_ACTION_TYPE.SET_TOUCHED,
        payload: {
          [field]: true,
        },
      });
    }
  };

  /** Init field ref **/
  React.useEffect(() => {
    fieldRef?.safeSet([field], {
      [field]: {
        _field: {
          ref: ref?.current,
          name: field,
        },
      },
    });
  }, []);

  return render({ field, ref, error, value, onBlur: handleBlur, onChange: handleChange });
};

export default Control;

Control.propTypes = {
  render: PropTypes.func.isRequired,
  field: PropTypes.string.isRequired,
};
