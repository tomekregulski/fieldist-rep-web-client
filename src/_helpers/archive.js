 {props.data.map((item, index) => {
            console.log(props.value);
            if ()
            if (!Array.isArray(props.value)) {
              if (props.value.hasOwnProperty(item)) {
                console.log(item);
                return (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={item}
                        onChange={handleChange}
                        name={item}
                      />
                    }
                    label={item}
                  />
                );
              } else if (props.value.includes(item)) {
                return (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={item}
                        onChange={handleChange}
                        name={item}
                      />
                    }
                    label={item}
                  />
                );
              } else {
                return (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        // checked={false}
                        onChange={handleChange}
                        name={item}
                      />
                    }
                    label={item}
                  />
                );
              }
            }
            // if (Array.isArray(props.value)) {
            //   if (props.value.includes(item)) {
            //     return (
            //       <FormControlLabel
            //         key={index}
            //         control={
            //           <Checkbox
            //             checked={item}
            //             onChange={handleChange}
            //             name={item}
            //           />
            //         }
            //         label={item}
            //       />
            //     );
            //   } else {
            //     return (
            //       <FormControlLabel
            //         key={index}
            //         control={
            //           <Checkbox
            //             checked={false}
            //             onChange={handleChange}
            //             name={item}
            //           />
            //         }
            //         label={item}
            //       />
            //     );
            //   }
            // }
          })}